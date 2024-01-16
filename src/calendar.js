import { Eventcalendar } from "@mobiscroll/react";
import { useRef, useState } from "react";

// define our resource IDs
const res = ["r1", "r2", "r3", "r4", "r5", "r6", "r7"];

const Calendar = () => {
  // calendar events
  const [events, setEvents] = useState(() => {
    const list = [];
    // random number between 0 and res.length (select a random resource)
    for (let i = 0; i < 100; i++) {
      const randomResource = Math.floor(Math.random() * res.length);
      list.push({
        id: i,
        title: "Event " + i,
        start: new Date(2024, 0, 16, 12),
        end: new Date(2024, 0, 16, 12),
        color: "black",
        resource: res[randomResource],
      });
    }
    return list;
  });
  // calendar resources
  const [resources, setResources] = useState(() => {
    const list = [];
    for (const r of res) {
      list.push({ id: r, name: r });
    }
    return list;
  });
  // ref to Eventcalendar
  const cal = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          if (cal.current) {
            const randomId = Math.floor(Math.random() * events.length);
            const event = events[randomId];
            console.log(event);
            cal.current.navigateToEvent(event);
          }
        }}
      >
        nav to random event
      </button>
      <div>
        <Eventcalendar
          ref={cal}
          theme="ios"
          themeVariant="light"
          view={{
            timeline: {
              type: "week",
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          }}
          data={events}
          resources={resources}
        />
      </div>
    </>
  );
};

export default Calendar;
