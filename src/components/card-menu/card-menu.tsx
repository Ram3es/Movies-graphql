import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { FC, PropsWithChildren, useState } from "react";

export const CardMenu: FC<PropsWithChildren> = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				sx={{
					position: "absolute",
					right: 5,

					":hover": { bgcolor: "rgba(218, 218, 218, 0.273)" },
				}}
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						width: "200px",
					},
				}}
			>
				{children}
			</Menu>
		</div>
	);
};
