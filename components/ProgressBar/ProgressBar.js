import styled from "styled-components";

export default function ProgressBar({ savedAmount, goalAmount }) {
  const progress = Math.min((savedAmount / goalAmount) * 100, 100);
  const roundedProgress = Math.round(progress);

  return (
    <div>
      <ProgressWrapper>
        <ProgressInput $progress={progress}></ProgressInput>
        <Percentage>{roundedProgress} %</Percentage>
      </ProgressWrapper>
    </div>
  );
}

const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #e0e0de;
  position: relative;
  height: 20px;
`;

const ProgressInput = styled.div`
  height: 20px;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ $progress }) => ($progress === 100 ? "" : "#2196f3")};
  position: absolute;
  top: 0;
  left: 0;
`;

const Percentage = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
