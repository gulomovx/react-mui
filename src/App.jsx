import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent='space-between'>
        {/* stack = flex and grid features */}
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
