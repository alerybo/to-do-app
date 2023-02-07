import { DashboardHeader, Container, TextButton } from "../design-system";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const DailyList = () => {
  return (
    <div>
      <DashboardHeader>
        <h2>Daily tasks</h2>
        <Container className="filters-container">
          <div>
            <TextButton>
              <p>Day</p>
            </TextButton>
            <TextButton>
              <p>Week</p>
            </TextButton>
            <TextButton>
              <p>Month</p>
            </TextButton>
          </div>
          <Container>
            <TextButton>
              <BsChevronLeft />
            </TextButton>
            <p>6 feb - 12 feb</p>
            <TextButton>
              <BsChevronRight />
            </TextButton>
          </Container>
        </Container>
      </DashboardHeader>
      <div>List</div>
    </div>
  );
};

export default DailyList;
