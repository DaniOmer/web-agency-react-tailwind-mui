import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { blue, cyan } from "@mui/material/colors";

import useColorMode from "../../hooks/useColorMode";

export default function CustomAccordion({ title, description, index }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: colorMode === "dark" ? cyan["A700"] : "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-black"
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {0 + (index + 1).toString() + ". " + title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
