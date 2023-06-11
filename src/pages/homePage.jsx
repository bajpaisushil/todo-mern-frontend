import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Navbar } from "../components/homePage/navbar";
import note from "../assets/note.png";
import "./styles.css";

const HomePage = () => {
  return (
    <Box padding={8}>
      <Image className="homePageImage" position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"3xl"}>
        Todo App
      </Heading>
      <Text className="homePageText" mt={8} textAlign={"justify"}>
        Introducing our innovative note application, designed to revolutionize
        the way you capture, organize, and manage your notes. With its powerful
        features and intuitive interface, our note application is the ultimate
        tool for boosting productivity and keeping your thoughts organized. One
        of the standout features of our note application is its seamless
        synchronization across multiple devices. Whether you're using a
        smartphone, tablet, or computer, your notes will always be up to date
        and accessible wherever you are. Say goodbye to the frustration of
        searching for important information scattered across different devices.
        In addition to its cross-platform capabilities, our note application
        offers a range of organizational tools to help you stay on top of your
        notes. Create multiple notebooks to categorize your notes based on
        projects, topics, or personal preferences. Within each notebook, you can
        create tags, allowing for easy searching and filtering. No more wasting
        time scrolling through countless pages to find that one crucial note.
        Collaboration is also a breeze with our note application. Share notes
        with colleagues, friends, or family members, and work together in
        real-time. Add comments, make edits, and track changes effortlessly. The
        power of teamwork is unleashed, enabling efficient collaboration on
        projects, meeting agendas, or simply sharing ideas. With its sleek and
        user-friendly interface, our note application ensures a delightful user
        experience. Customize your notes with different fonts, colors, and
        formatting options to make them visually appealing and easier to read.
        Add attachments, images, and links to complement your notes and enrich
        your information. Discover the limitless possibilities of note-taking
        with our advanced note application. Stay organized, boost productivity,
        and streamline your workflow like never before. Experience the future of
        note-taking today!
      </Text>
    </Box>
  );
};

export default HomePage;
