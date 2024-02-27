import styled from "styled-components";

export default function ProgressBar({ savedAmount, goalAmount }) {
  const progress = Math.min((savedAmount / goalAmount) * 100, 100);

  return (
    <ProgressWrapper>
      <ProgressInput $progress={progress}></ProgressInput>
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #e0e0de;
`;

const ProgressInput = styled.div`
  height: 20px;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ $progress }) =>
    $progress === 100 ? "#4caf50" : "#2196f3"};
`;
