// Formulário contendo todas as informações para fazer o cadastro de endereço.
import React, { useState } from 'react';
import { Address, AddressFormProps } from '../types/types';

const AddressForm: React.FC<AddressFormProps> = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Address>({
    id: address?.id,
    tipo: address?.tipo || '',
    nomePessoa: address?.nomePessoa || '',
    telefonePessoa: address?.telefonePessoa || '',
    pais: address?.pais || '',
    estado: address?.estado || '',
    cidade: address?.cidade || '',
    rua: address?.rua || '',
    numero: address?.numero || 0,
    codigoPostal: address?.codigoPostal || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 text-sm">
      <h2 className="text-xl font-bold mb-2">{address ? 'Edit Address' : 'Add Address'}</h2>
      <div>
        <label className="block">Address Type</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        >
          <option value="">Select Type</option>
          <option value="Casa">Casa</option>
          <option value="Trabalho">Trabalho</option>
        </select>
      </div>
      <div>
        <label className="block">Full Name</label>
        <input
          type="text"
          name="nomePessoa"
          value={formData.nomePessoa}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Phone Number</label>
        <input
          type="text"
          name="telefonePessoa"
          value={formData.telefonePessoa}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Country</label>
        <input
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">State</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">City</label>
        <input
          type="text"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Street</label>
        <input
          type="text"
          name="rua"
          value={formData.rua}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Street Number</label>
        <input
          type="number"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Postal Code</label>
        <input
          type="text"
          name="codigoPostal"
          value={formData.codigoPostal}
          onChange={handleChange}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
          Save
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-2 py-1 rounded text-xs">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddressForm;
