// Listagem de tipos de elementos
export interface Address {
    id?: number;
    tipo: string;
    nomePessoa: string;
    telefonePessoa: string;
    pais: string;
    estado: string;
    cidade: string;
    rua: string;
    numero: number;
    codigoPostal: string;
}

export interface AddressFormProps {
    address?: Address;
    onSave: (address: Address) => void;
    onCancel?: () => void;
}

export interface AddressListProps {
    addresses: Address[];
    onEdit: (address: Address) => void;
    onDelete: (id: number) => void;
}
