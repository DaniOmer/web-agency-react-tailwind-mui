import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const GrowthChart = () => {
  return (
    <section className="max-w-6xl mx-auto mt-24">
      <h1 className="text-4xl mb-6 text-center">
        How company build impressive brand ?
      </h1>
      <div className="flex justify-center">
        <Box sx={{ width: 1000 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Brand identity" placement="top-start">
                <Button>Visual Identity</Button>
              </Tooltip>
              <Tooltip title="Brand identity" placement="top">
                <Button>Brand Message</Button>
              </Tooltip>
              <Tooltip title="Brand identity" placement="top-end">
                <Button>Customer Experience</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Website" placement="left-start">
                <Button>Performance</Button>
              </Tooltip>
              <br />
              <Tooltip title="Website" placement="left">
                <Button>Speed</Button>
              </Tooltip>
              <br />
              <Tooltip title="Website" placement="left-end">
                <Button>Security</Button>
              </Tooltip>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems="flex-end"
              direction="column"
            >
              <Grid item>
                <Tooltip title="Graphic design" placement="right-start">
                  <Button>Creativity</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Graphic design" placement="right">
                  <Button>Originality</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Graphic design" placement="right-end">
                  <Button>Adaptability</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Content" placement="bottom-start">
                <Button>Quality</Button>
              </Tooltip>
              <Tooltip title="Content" placement="bottom">
                <Button>Optimization</Button>
              </Tooltip>
              <Tooltip title="Content" placement="bottom-end">
                <Button>Strategy</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  );
};
export default GrowthChart;
