
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchColors } from '../store/reducers/colorsReducer';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { addColor } from '../store/reducers/colorsReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const ColorChips: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { colors } = useSelector((state: RootState) => state.colors);

    const [showInput, setShowInput] = useState(false); 
    const [newColor, setNewColor] = useState(''); 
  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);
  const handleAddClick = () => {
    setShowInput(true);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColor(e.target.value);
  };
  const handleAddColor = () => {
    if (newColor.trim() !== '') {
      dispatch(addColor({ name: newColor }));
      setNewColor('');
      setShowInput(false);
    }
  };

  return (
    <Stack
  direction="row"

  spacing={4}
  justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '40vh' }}
    >
      {Array.isArray(colors) && colors.map((color: any)  => (
        <Chip key={color.id} label={color.name} onDelete={() => {}} />
      ))}

      {showInput ? (
        <>
          <TextField
            value={newColor}
            onChange={handleInputChange}
            placeholder="Enter color"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" color="primary" onClick={handleAddColor}>
            Add
          </Button>
          </>
      ) : (
        <Chip label="+" color="primary" onClick={handleAddClick}/>)}
    </Stack>
  );
};

export default ColorChips;
