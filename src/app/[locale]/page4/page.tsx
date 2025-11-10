'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DonationPage() {
  const [donorName, setDonorName] = useState('');
  const [selectedFund, setSelectedFund] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleDonate = () => {
    if (!donorName || !selectedFund || !amount) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Сделать пожертвование
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-4">

        {/* От кого */}
        <input
          type="text"
          placeholder="От кого"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
        />

        {/* Выбор фонда */}
        <FormControl fullWidth>
          <InputLabel id="fund-label">Выберите фонд</InputLabel>
          <Select
            labelId="fund-label"
            value={selectedFund}
            onChange={(e) => setSelectedFund(e.target.value)}
            label="Выберите фонд"
          >
            <MenuItem value="Лона">Лона</MenuItem>
            <MenuItem value="Музаффар">Музаффар</MenuItem>
            <MenuItem value="Милосердие">Милосердие</MenuItem>
          </Select>
        </FormControl>

        {/* Ввод суммы */}
        <input
          type="number"
          placeholder="Сумма пожертвования"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
        />



        {/* Комментарий */}
        <textarea
          placeholder="Комментарий (необязательно)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition resize-none"
          rows={3}
        />

        {/* Кнопка пожертвования */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleDonate}
          sx={{
            borderRadius: '12px',
            padding: '12px 0',
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          Пожертвовать
        </Button>
      </div>

      {/* Modal */}
      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Спасибо за пожертвование!
          </Typography>
          <Typography variant="body1" mb={3}>
            {donorName}, вы пожертвовали {amount} сомони в фонд "{selectedFund}".
            {comment && <><br />Комментарий: {comment}</>}
          </Typography>
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            Закрыть
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
