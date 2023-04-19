import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Line, Mission1 } from "~/assets/vectors";
import { Section } from "~/components";
import { MissionContent } from "~/constants/HomeContent";
import { type MissionProps } from "~/type";

import { Mission } from "./Components/Mission";

export const OurMission = () => {
  const [currentTab, setCurrentTab] = useState<MissionProps>();
  // const [active, setActive] = useState(false);

  console.log(currentTab, "test");
  return (
    <Section pt={0} bg={{ base: "#1a0b36", sm: "unset" }} mt={{ base: "-400px", lg: "-470px" }}>
      <Box
        sx={{ borderRadius: "24px" }}
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.0488) 0%, rgba(255, 255, 255, 0) 47.34%)"}
        px={{ base: 20, sm: 70 }}
        py={{ base: 20, sm: 50 }}
      >
        <Flex align={"center"} direction={{ base: "column", lg: "row" }} gap={20}>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Text data-aos="fade-up" c={"white"} mb={12} fz={24} fw={400}>
              Our Mission
            </Text>
            <Title data-aos="fade-up" fz={{ sm: 56 }} fw={600}>
              Providing top-notch qualities
            </Title>

            <Text mt={67} fw={700} fz={18}>
              0{currentTab?.id || 0}
              <span style={{ color: "#887BE3" }}> - 06</span>
            </Text>

            <Flex mt={42} gap={{ base: 20, lg: 74 }}>
              <Box w={"20px"}>
                <AspectRatio h={"100%"} ratio={4.63 / 88}>
                  {" "}
                  <Line />
                </AspectRatio>
              </Box>
              <Flex data-aos="fade-up" justify={"center"} gap={28} direction={"column"}>
                {MissionContent.map((item) => (
                  <Text
                    onClick={() => {
                      setCurrentTab(item);
                    }}
                    sx={{
                      transition: "all 1s",
                    }}
                    style={
                      item.id === currentTab?.id
                        ? {
                            cursor: "pointer",
                            transition: "all 1s",

                            fontSize: "33px",
                            // [`@media (max-width: ${1200}px)`]: {
                            //   fontSize: "unset",
                            // },
                            color: "white",
                          }
                        : {
                            cursor: "pointer",
                            // fontSize: "28px",
                          }
                    }
                    fw={400}
                    fz={{ sm: 28 }}
                    c={"#CBC3FF"}
                    key={nanoid()}
                  >
                    {item.name}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Box>

          <Mission
            currentTab={
              currentTab || {
                svg: <Mission1 />,
                id: "0",
                name: "Permissionless",
                content: "Average transaction fee less than a penny",
              }
            }
          />
        </Flex>
      </Box>
    </Section>
  );
};
