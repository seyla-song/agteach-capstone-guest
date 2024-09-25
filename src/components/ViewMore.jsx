import { Button, Grid, Stack } from '@mui/material';
import { useState } from 'react';

export default function ViewMore  ({ items, renderItem, initialVisibleCount = 12 }) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleView = () => {
    setIsExpanded(!isExpanded);
    setVisibleCount(isExpanded ? initialVisibleCount : items.length);
  };

  const totalItems = items.length;
  const remainingItems = totalItems - visibleCount;

  return (
    <Stack gap={3}>
      <Grid container spacing={2}>
        {items.slice(0, visibleCount).map((item, idx) => (
          <Grid item key={idx} xs={6} md={2}>
            {renderItem(item)}
          </Grid>
        ))}
      </Grid>

      {totalItems > initialVisibleCount && ( // Show button if there are more items
        <Button
          variant="outlined"
          onClick={handleToggleView}
          sx={{ px: 4, py: 2 }}
        >
          {isExpanded ? 'Hide' : `View ${remainingItems} more`}
        </Button>
      )}
    </Stack>
  );
};
