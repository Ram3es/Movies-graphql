import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";
import { CardMenu } from "../card-menu";
import { MenuItemStyle as MenuItem } from "../card-menu/card-menu.styles";

export interface IMovie {
	image: string;
	title: string;
	releaseDate: string;
	genres: Array<{ id: number; name: string }>;
}

interface MovieCardSelectedProps {
	onDeleteCard?: () => void;
	movie?: {
		image: string;
		title: string;
		releaseDate: string;
		genres: Array<{ id: number; name: string }>;
	};
}

export const MovieCardSelected: FC<MovieCardSelectedProps> = () => {
	return (
		<Card sx={{ display: "flex", position: "relative" }}>
			<CardMedia
				component="img"
				sx={{ width: 100 }}
				image="https://www.themoviedb.org/t/p/w220_and_h330_face/1tntyDRcev7PIg6xfo8El56ocoi.jpg"
				alt="Live from space album cover"
			/>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Live From Space
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Mac Miller
					</Typography>
				</CardContent>
				<Box sx={{ p: 2, pt: 0 }}>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Mac Miller
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						123
					</Typography>
				</Box>
			</Box>
			<CardMenu>
				<MenuItem>Delete</MenuItem>
			</CardMenu>
		</Card>
	);
};
