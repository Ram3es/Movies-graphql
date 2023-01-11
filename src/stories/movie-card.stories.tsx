import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MovieCard } from "../components/movie-card";

export default {
	title: "Card/MovieCard",
	component: MovieCard,
	argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
	<MovieCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
