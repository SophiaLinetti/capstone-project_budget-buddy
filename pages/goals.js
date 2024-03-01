import { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate } from "../utils/normalizeUtils.js";
import Navbar from "@/components/Nav/Nav";
import GoalsCard from "@/components/GoalsCard/GoalsCard.js";
import GoalsForm from "@/components/Forms/GoalForm.js";
import Modal from "@/components/Modal";
import TransactionForm from "@/components/Forms/TransactionForm.js";
import {
  StyledHeading,
  StyledText,
  StyledCardContainer,
  StyledSavingContainer,
  Main,
  ActionButtonGoalsPage,
  StyledAllButtonsContainer,
  StyledTotalSavingContainer,
  HeadingWrapper,
} from "@/styles";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Goals({ transactions, onAddTransaction }) {
  const { data: goals, mutate: mutateGoals } = useSWR("/api/goals", fetcher);

  const [totalSavings, setTotalSavings] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [editingGoal, setEditingGoal] = useState(null);

  function handleCloseModal() {
    setModalType(null);
  }

  function renderModalContent() {
    if (modalType === "add saving goal") {
      return (
        <GoalsForm
          onCloseModal={handleCloseModal}
          onSaveGoal={handleSaveGoal}
          savingBalance={savingsTransferSum}
        />
      );
    } else if (modalType === "edit saving goal") {
      return (
        <GoalsForm
          onCloseModal={handleCloseModal}
          onSaveGoal={handleSaveGoal}
          savingBalance={savingsTransferSum + totalSavings}
          goal={editingGoal}
        />
      );
    } else if (modalType === "savings withdrawal") {
      return (
        <TransactionForm
          onAddTransaction={onAddTransaction}
          formType="savings withdrawal"
          onCloseModal={handleCloseModal}
          savingsTransferSum={savingsTransferSum}
        />
      );
    }
  }

  function handleEditGoal(goal) {
    setModalType("edit saving goal");
    setEditingGoal(goal);
  }

  async function handleSaveGoal(goalToSave) {
    const isEditing = !!goalToSave._id;
    const method = isEditing ? "PUT" : "POST";
    const endpoint = isEditing ? `/api/goals/${goalToSave._id}` : "/api/goals";

    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goalToSave),
    });

    if (!response.ok) {
      console.error("Failed to save goal");
    } else {
      const updatedGoal = await response.json();
      if (isEditing) {
        const originalGoal = goals.find((goal) => goal._id === goalToSave._id);
        const difference =
          parseInt(goalToSave.savedAmount) - parseInt(originalGoal.savedAmount);
        const transactionForEdit = {
          amount: -difference,
          category: "Savings transfer",
          date: formatDate(new Date()),
          description: "Edited saving goal",
          type: "Saving",
          internalGoalAllocation: "yes",
        };
        onAddTransaction(transactionForEdit);
        mutateGoals(
          goals.map((goal) =>
            goal._id === updatedGoal._id ? updatedGoal : goal
          ),
          false
        );
      } else {
        const transactionForNewGoal = {
          amount: -parseInt(goalToSave.savedAmount),
          category: "Savings transfer",
          date: formatDate(new Date()),
          description: "New saving goal",
          type: "Saving Goal",
          internalGoalAllocation: "yes",
        };
        onAddTransaction(transactionForNewGoal);
        mutateGoals(
          Array.isArray(goals) ? [...goals, updatedGoal] : [updatedGoal],
          false
        );
      }
      handleCloseModal();
    }
  }

  async function handleDeleteGoal(_id) {
    const goalData = goals.find((goal) => goal._id === _id);
    if (!goalData) {
      console.error("Goal not found");
      return;
    }
    const response = await fetch(`/api/goals/${_id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Failed to delete goal");
    } else {
      onAddTransaction({
        amount: parseInt(goalData.savedAmount),
        category: "Savings transfer",
        date: formatDate(new Date()),
        description: `Deleted saving goal: ${goalData.goalName}`,
        type: "Saving Goal",
        internalGoalAllocation: "yes",
      });

      mutateGoals(
        goals.filter((goal) => goal._id !== _id),
        false
      );
    }
  }

  useEffect(() => {
    const totalSavedAmount = goals?.reduce(
      (sum, goal) => sum + parseInt(goal.savedAmount),
      0
    );
    setTotalSavings(totalSavedAmount);
  }, [goals]);

  function calculateSavingsTransfers(transactions) {
    return transactions
      .filter((transaction) => transaction.category === "Savings transfer")
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }
  const savingsTransferSum = transactions
    ? calculateSavingsTransfers(transactions)
    : 0;
  return (
    <>
      {modalType && <Modal>{renderModalContent()}</Modal>}
      <HeadingWrapper>
        <StyledHeading>Saving Goals</StyledHeading>
      </HeadingWrapper>
      <Main>
        <StyledCardContainer>
          <StyledSavingContainer>
            Current Savings Balance: {savingsTransferSum}
          </StyledSavingContainer>

          <StyledAllButtonsContainer>
            <ActionButtonGoalsPage
              onClick={() => setModalType("savings withdrawal")}
            >
              Transfer Back
            </ActionButtonGoalsPage>
            <ActionButtonGoalsPage
              onClick={() => setModalType("add saving goal")}
            >
              Add Goal
            </ActionButtonGoalsPage>
          </StyledAllButtonsContainer>
          <GoalsCard
            goals={goals}
            onHandleDeleteGoal={handleDeleteGoal}
            onEditGoal={handleEditGoal}
          />
          {goals?.length === 0 && (
            <StyledText>{`You do not have any Goals added yet. `}</StyledText>
          )}
        </StyledCardContainer>
        <StyledTotalSavingContainer>
          Total Saved Amount: {totalSavings}
        </StyledTotalSavingContainer>
      </Main>
      <Navbar />
    </>
  );
}
