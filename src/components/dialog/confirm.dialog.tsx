import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

type ConfirmDialogProps = {
    visible: boolean;
    closeModal: () => void;
    onSubmit?: () => void;
    title?: string;
    description?: string;
    variant?: 'outline' | 'destructive' | 'default';
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    visible,
    closeModal,
    onSubmit,
    title = 'Xác nhận thao tác',
    description = 'Bạn có chắc muốn thực hiện thao tác này?',
    variant = 'outline',
}) => {
    const [state, setState] = useState({
        title,
        description,
    });

    useEffect(() => {
        setState({ title, description });
    }, [title, description]);

    const handleChange = (isOpen: boolean) => {
        if (!isOpen) closeModal();
    };

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
        closeModal();
    };

    return (
        <AlertDialog open={visible} onOpenChange={handleChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{state.title}</AlertDialogTitle>
                    <AlertDialogDescription>{state.description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button className="btn-danger">Hủy</Button>
                    </AlertDialogCancel>
                    <Button variant={variant} onClick={handleSubmit}>
                        Tiếp tục
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConfirmDialog;
