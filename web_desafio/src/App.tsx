import React, { useState, useEffect } from 'react';
import apiClient from './api/apiClient';
import { Address } from './types/types';
import AddressForm from './components/AdressForm';
import AddressList from './components/AdressList';
import Image from '/icon.jpg';

const App: React.FC = () => {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [editingAddress, setEditingAddress] = useState<Address | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);

    useEffect(() => {
        // Buscar todos os cadastros de endereços
        apiClient.get('')
            .then(response => {
                setAddresses(response.data);
            })
            .catch(error => console.error('Error fetching addresses', error));
    }, []);

    const addAddress = (address: Address) => {
        // Criar um cadastro de endereço
        apiClient.post('', address)
            .then(response => {
                setAddresses([...addresses, response.data]);
                setShowForm(false);
            })
            .catch(error => console.error('Error adding address', error));
    };

    const updateAddress = (address: Address) => {
        // Atualizar um cadastro de endereço
        apiClient.put(`/${address.id}`, address)
            .then(response => {
                setAddresses(addresses.map(a => (a.id === address.id ? response.data : a)));
                setEditingAddress(null);
                setShowForm(false);
            })
            .catch(error => console.error('Error updating address', error));
    };

    const deleteAddress = (id: number) => {
        // Deletar um cadastro de endereço
        apiClient.delete(`/${id}`)
            .then(() => {
                setAddresses(addresses.filter(a => a.id !== id));
            })
            .catch(error => console.error('Error deleting address', error));
    };

    const handleEdit = (address: Address) => {
        setEditingAddress(address);
        setShowForm(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E5E9DE]">
            <div className="bg-white p-4 rounded-lg w-[90vw] max-w-5xl flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2 p-2">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-blue-500 text-white px-2 py-1 rounded mb-4 text-sm"
                    >
                        {showForm ? 'Hide Form' : 'Add New Address'}
                    </button>
                    <AddressList addresses={addresses} onEdit={handleEdit} onDelete={deleteAddress} />
                    <img src={Image} alt="" width="300px" className='flex items-center justify-center mx-auto' />
                </div>
                {showForm && (
                    <div className="w-full lg:w-1/2 p-2 flex flex-col space-y-2">
                        <AddressForm
                            address={editingAddress}
                            onSave={editingAddress ? updateAddress : addAddress}
                            onCancel={() => {
                                setEditingAddress(null);
                                setShowForm(false);
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
