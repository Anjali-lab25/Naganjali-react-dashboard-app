'use client';

import { Modal, Box, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineChartData } from '../data/lineChartData';

interface RevenueGraphModalProps {
  open: boolean;
  onClose: () => void;
}

export const RevenueGraphModal = ({ open, onClose }: RevenueGraphModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="revenue-graph-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: 800,
        bgcolor: 'background.paper',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        p: 4,
        borderRadius: 2,
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 100%)',
        border: '1px solid',
        borderColor: 'rgba(148, 163, 184, 0.15)',
        backdropFilter: 'blur(20px)',
        zIndex: 1500,
      }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2, color: 'text.primary' }}>
          Revenue Trend
        </Typography>
        <Box sx={{ width: '100%', height: 400 }}>
          <LineChart
            xAxis={[{ 
              data: lineChartData.xAxis[0].data,
              scaleType: 'band',
            }]}
            series={[
              {
                ...lineChartData.series[0],
                area: true,
              },
            ]}
            height={400}
          />
        </Box>
      </Box>
    </Modal>
  );
};