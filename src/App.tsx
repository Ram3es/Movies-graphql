import { FC } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";

import { Setting } from "./screens/settings";
import { Home } from "./screens/home";
import { ROUTES } from "./constants/routes";
import { Recommend } from "./screens/recommend";

export const App: FC = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Box
				sx={{
					backgroundColor: (theme) => theme.palette.grey[100],
				}}
			>
				<Container maxWidth="xl">
					<Routes>
						<Route path={ROUTES.home} element={<Home />} />
						<Route path={ROUTES.setting} element={<Setting />} />
						<Route path={ROUTES.recommend} element={<Recommend />} />
					</Routes>
				</Container>
			</Box>
		</>
	);
};
