import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext);

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    });

    async function handleCerateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data;

        await createTransaction({
            description,
            category,
            price,
            type,
        });

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCerateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Income
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Outcome
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Add</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}