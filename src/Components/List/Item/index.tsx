import styled from "styled-components"
import { Lembrete } from "../../../types/lembretes"
import { useState } from "react"

const ItemLista = styled.li`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 );
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
    width: 44vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateX(5px);
    }
`

const ItemLembrete = styled.h3`
    margin-bottom: 0;
    word-break: break-all;
    flex: 1;
`

const DeleteButton = styled.button`
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
    margin-left: 12px;

    &:hover {
        background-color: #ff5252;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`

const ConfirmDialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const DialogBox = styled.div`
    background: linear-gradient(135deg, #002F52 0%, #326589 100%);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    max-width: 400px;
    width: 90%;
`

const DialogTitle = styled.h3`
    margin-bottom: 12px;
    font-size: 1.25rem;
`

const DialogText = styled.p`
    margin-bottom: 20px;
    color: #D0D0D0;
`

const DialogButtons = styled.div`
    display: flex;
    gap: 12px;
    justify-content: flex-end;
`

const DialogButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`

const CancelButton = styled(DialogButton)`
    background-color: #5D677C;
    color: white;

    &:hover {
        background-color: #4a5468;
    }
`

const ConfirmButton = styled(DialogButton)`
    background-color: #ff6b6b;
    color: white;

    &:hover {
        background-color: #ff5252;
    }
`

interface ItemProps {
    lembrete: Lembrete;
    onDeletar?: (id: number) => void;
}

export default function Item({ lembrete, onDeletar }: ItemProps) {
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
    const [deletando, setDeletando] = useState(false);

    const handleDeletarClick = () => {
        setMostrarConfirmacao(true);
    }

    const handleConfirmarDelete = async () => {
        if (onDeletar) {
            setDeletando(true);
            await onDeletar(lembrete.id);
            setDeletando(false);
            setMostrarConfirmacao(false);
        }
    }

    const handleCancelar = () => {
        setMostrarConfirmacao(false);
    }

    return (
        <>
            <ItemLista>
                <ItemLembrete>{lembrete.name}</ItemLembrete>
                <DeleteButton 
                    onClick={handleDeletarClick}
                    disabled={deletando}
                >
                    {deletando ? 'Deletando...' : 'Deletar'}
                </DeleteButton>
            </ItemLista>

            {mostrarConfirmacao && (
                <ConfirmDialog onClick={handleCancelar}>
                    <DialogBox onClick={(e) => e.stopPropagation()}>
                        <DialogTitle>Confirmar exclusão</DialogTitle>
                        <DialogText>
                            Tem certeza que deseja deletar o lembrete <strong>"{lembrete.name}"</strong>?
                        </DialogText>
                        <DialogButtons>
                            <CancelButton onClick={handleCancelar}>
                                Cancelar
                            </CancelButton>
                            <ConfirmButton onClick={handleConfirmarDelete}>
                                Confirmar
                            </ConfirmButton>
                        </DialogButtons>
                    </DialogBox>
                </ConfirmDialog>
            )}
        </>
    )
}
