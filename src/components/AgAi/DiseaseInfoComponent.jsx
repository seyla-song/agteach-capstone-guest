import { List, ListItem, Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const DiseaseInfoComponent = ({data}) => {

  const { cure, disease, problem, symptom } = data;

  return (
    <Stack width="100%" gap={3}>
      <Typography variant="h3">{disease}</Typography>
      <Stack gap={3}>
        <InformationDetail
          title="Problem"
          desc={problem}
          icon={<WarningIcon color="error" fontSize="large" />}
        />
        <InformationDetail
          title="Symptom"
          desc={symptom}
          icon={<SearchOutlinedIcon color="blue" fontSize="large" />}
        />
        <InformationDetail
          title="Cure Management"
          desc={cure}
          icon={<FavoriteBorderOutlinedIcon color="teal" fontSize="large" />}
        />
      </Stack>
    </Stack>
  );
};

const InformationDetail = ({ title, desc, icon }) => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        {icon}
        <Typography variant="h4">{title}</Typography>
      </Stack>
      <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
        <ListItem sx={{ display: 'list-item', paddingY: 1 }}>{desc}</ListItem>
      </List>
    </Stack>
  );
};
