import { List, ListItem, Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const DiseaseInfoComponent = ({ data }) => {
  return (
    <Stack  width="100%" gap={3}>
      <Typography variant='h3'>{data.plant}</Typography>
      <Stack gap={3}>
        <InformationDetail
          dataObj={data.problem}
          icon={<WarningIcon color='error' fontSize="large" />}
        />
        <InformationDetail
          dataObj={data.symptoms}
          icon={<SearchOutlinedIcon color='blue' fontSize="large" />}
        />
        <InformationDetail
          dataObj={data.cureManagement}
          icon={<FavoriteBorderOutlinedIcon color='teal' fontSize="large" />}
        />
      </Stack>
    </Stack>
  );
};

const InformationDetail = ({ dataObj, icon }) => {
  return (
    <Stack>
      <Stack direction="row" alignItems='center' gap={2}>
        {icon}
        <Typography variant='h4'>{dataObj.title}</Typography>
      </Stack>
      <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
        {dataObj.details.map((item, index) => (
          <ListItem sx={{ display: 'list-item', padding: 0 }}>{item}</ListItem>
        ))}
      </List>
    </Stack>
  );
};
