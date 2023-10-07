import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      {/* change position of timeline left to left align or alternate in this case the label placed right left right left alternatively*/}
      <TimelineItem>
        {/* 1e */}
        <TimelineOppositeContent color="text.secondary">
          9:30 am
        </TimelineOppositeContent>
        {/* next the timeline seperator */}
        <TimelineSeparator>
          {/* nest 2more component */}
          <TimelineDot color="error" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* specify text */}
          City A
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {/* 1e */}
        <TimelineOppositeContent color="text.secondary">
          10:30 am
        </TimelineOppositeContent>
        {/* next the timeline seperator */}
        <TimelineSeparator>
          {/* nest 2more component */}
          <TimelineDot color="error" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* specify text */}
          City B
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {/* 1e */}
        <TimelineOppositeContent color="text.secondary">
          11:30 am
        </TimelineOppositeContent>
        {/* next the timeline seperator */}
        <TimelineSeparator>
          {/* nest 2more component */}
          <TimelineDot color="error" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
          {/* specify text */}
          City C
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

//timeline component used to display a list of events in chronological order
// import 6 different components TimeLine, TimeLineItem, TimelineSeperator, TimeLineConnector, TimelineContent, TimeDot

// 1a in jsx replacing the div vwith timeline component and within of it invoke timelineitem component

// 1b next after timeline sepearator within the timeline item invoke timeline content

// 1c that's is a jsx for 1 timeline item le'ts duplicate item and all nested tag 2 more times

// 1d for last item we don't have to specify the connector component let's delete that

// now let's now take a look for a few props we can add first we can change dot color using color prop on all timelinedot component

// 1e now if we are interested inhaving content in both sides we can make use the time line opposite content component import it at top TimelineOppositeComntent amd add it to timelineItem and add it to 2 other timeline items as well
