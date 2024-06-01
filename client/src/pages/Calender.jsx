import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

//icons
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useNavigate } from "react-router";

export default function Calender() {
  const startingDate = useSelector((state) => state.date);
  const navigate = useNavigate();
  const events = [
    { title: "Drizzle Shower", start: new Date(2023, 8, 19) },
    { title: "28 deg", start: new Date(2023, 8, 19) },
    { title: "48% precipitation", start: new Date(2023, 8, 19) },

    { title: "sunny", start: new Date(2023, 8, 20) },
    { title: "38 deg", start: new Date(2023, 8, 20) },
    { title: "24% precipitation", start: new Date(2023, 8, 20) },

    { title: "Thunder Storm", start: new Date(2023, 8, 21) },
    { title: "28 deg", start: new Date(2023, 8, 21) },
    { title: "74% precipitation", start: new Date(2023, 8, 21) },

    { title: "Sunny", start: new Date(2023, 8, 22) },
    { title: "35 deg", start: new Date(2023, 8, 22) },
    { title: "42% precipitation", start: new Date(2023, 8, 22) },

    { title: "Mild Rain", start: new Date(2023, 8, 23) },
    { title: "30 deg", start: new Date(2023, 8, 23) },
    { title: "52% precipitation", start: new Date(2023, 8, 23) },

    { title: "Sunny", start: new Date(2023, 9, 24) },
    { title: "39 deg", start: new Date(2023, 9, 24) },
    { title: "24% precipitation", start: new Date(2023, 9, 24) },

    { title: "02Plantation", start: new Date(2023, 9, 10) },

    { title: "03Fertilization", start: new Date(2023, 10, 17) },

    { title: "Harvesting", start: new Date(2023, 11, 20) },
    {
      title: "01Seeding",
      start: new Date(2023, 8, 19),
    },

    {
      title: "Seeding",
      start: startingDate.date,
    },
    { title: "Plantation", start: new Date(2023, 8, 27) },
    { title: "Fertilization", start: new Date(2023, 9, 21) },
    { title: "Harvesting", start: new Date(2023, 10, 20) },
    // { title: "Fertilization", start: new Date(2023, 9, 21) },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-3xl font-bold mt-8">Progress Calender</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          eventContent={renderEventContent}
        />
        <div className="w-full flex justify-end mt-5">
          <Button buttonText="Go to Home" onClick={() => navigate("/")} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
