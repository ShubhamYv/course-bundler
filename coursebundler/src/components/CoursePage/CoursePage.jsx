import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'lectureId1234',
      title: 'Sample',
      description: 'sample desc',
      video: {
        url: 'qjsduqeidguqwd',
      },
    },
    {
      _id: 'lectureId1234',
      title: 'Sample',
      description: 'sample desc',
      video: {
        url: 'qjsduqeidguqwd',
      },
    },
    {
      _id: 'lectureId1234',
      title: 'Sample',
      description: 'sample desc',
      video: {
        url: 'qjsduqeidguqwd',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1rf']}>
      <Box>
        <video
          width={'100%'}
          controls
          src={introVideo}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children={'Description'} />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
