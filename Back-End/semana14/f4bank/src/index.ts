import * as fs from 'fs'
import moment from 'moment';
moment.locale('pt-br');

type Account = {
    name: string,
    cpf: number,
    birth: moment.Moment,
    balance: number
};

const archiveName: string = process.argv[2];
const newAccountName: string = process.argv[3];
const newAccountCpf: string = process.argv[4];
const newAccountBirth: string = process.argv[5];
const newAccountBalance: string = process.argv[6];

const bufferArchive: Buffer = fs.readFileSync(archiveName);
const textArchive: string = bufferArchive.toString();
const accountsList: Account[] = textArchive ? JSON.parse(textArchive) : [];

export default function createAccount(
    newAccountName: string,
    newAccountCpf: string,
    newAccountBirth: string,
    newAccountBalance: string
): void {
    try {
        const numberCPF = Number(newAccountCpf);
        const numberBirth = moment(newAccountBirth, "DD/MM/YYYY");
        const numberBalance = Number(newAccountBalance);

        accountsList.push(
            {
                name: newAccountName,
                cpf: numberCPF,
                birth: numberBirth,
                balance: numberBalance
            }
        );

        const updatedList = JSON.stringify(accountsList, null, 2);
        fs.writeFileSync("./data.json", updatedList);

        console.log('Conta criada com sucesso!');
    } catch (error) {
        console.log('Erro ao criar conta' + error.message);
    };
};

createAccount(newAccountName, newAccountCpf, newAccountBirth, newAccountBalance);