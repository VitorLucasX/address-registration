// Card que lista os cadastros de endereços
import React from 'react';
import { Address, AddressListProps } from '../types/types';

const AddressList: React.FC<AddressListProps> = ({ addresses, onEdit, onDelete }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Address List</h2>
            {addresses.length === 0 ? (
                <p className="text-sm">No addresses available. Add a new address.</p>
            ) : (
                <ul>
                    {addresses.map((address: Address) => (
                        <li key={address.id} className="mb-2 p-2 border rounded-lg flex justify-between items-center text-sm">
                            <div>
                                <p><strong>{address.tipo}</strong></p>
                                <p>{address.nomePessoa}, {address.telefonePessoa}</p>
                                <p>{address.pais}, {address.estado}</p>
                                <p>{address.cidade}, {address.rua}, {address.numero}</p>
                                <p>{address.codigoPostal}</p>
                            </div>
                            <div className="flex space-x-1">
                                <button onClick={() => onEdit(address)} className="bg-[#5e38c7] text-white px-2 py-1 rounded text-xs">
                                    Edit
                                </button>
                                <button onClick={() => onDelete(address.id!)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddressList;
