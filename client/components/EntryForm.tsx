// components/EntryForm.tsx
import { useState } from 'react';
// import { addEntry, updateEntry } from '../libs/firebase';

interface EntryFormProps {
  initialData?: any;
  onSubmit: () => void;
}

const EntryForm: React.FC<EntryFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (initialData) {
      // await updateEntry(initialData.id, formData);
    } else {
      // await addEntry(formData);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name || ''} onChange={handleChange} placeholder="Name" />
      <input type="text" name="contact" value={formData.contact || ''} onChange={handleChange} placeholder="Contact" />
      <input type="text" name="address" value={formData.address || ''} onChange={handleChange} placeholder="Address" />
      <button type="submit">{initialData ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default EntryForm;
