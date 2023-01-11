import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MovieCardSelected } from "../components/movie-card-selected";

export default {
	title: "Card/Movie Card Selected",
	component: MovieCardSelected,
	argTypes: {},
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args) => (
	<MovieCardSelected {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
