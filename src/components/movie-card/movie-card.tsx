import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { FC } from "react";
import { CardMenu } from "../card-menu";
import { MenuItemStyle as MenuItem } from "../card-menu/card-menu.styles";

interface MovieCardProps {
	test?: string;
}

export const MovieCard: FC<MovieCardProps> = ({ test = "zvbsh" }) => {
	return (
		<Card sx={{ maxWidth: 250, position: "relative" }}>
			<CardMenu>
				<MenuItem>Selected</MenuItem>
			</CardMenu>
			<CardMedia
				component="img"
				height="300"
				image="https://www.themoviedb.org/t/p/w220_and_h330_face/iKXD9UnbDt5EQd8pp6kGa7BSeTw.jpg"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
		</Card>
	);
};
