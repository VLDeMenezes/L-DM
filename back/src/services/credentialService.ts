import { CredentialRepository } from "../config/data-source";
import { Credentials } from "../entities/Credentials";

export const createCredencialService = async (correo: string, dni: number) => {
  const newCredential = await CredentialRepository.create();
  newCredential.username = correo;
  newCredential.password = dni;
  const credentials = await CredentialRepository.save(newCredential);
  return credentials;
};

export const checked = async (username: string, password: number) => {
  const credentials: Credentials | null = await CredentialRepository.findOneBy({
    username: username,
  });
  credentials?.password === password
    ? credentials.id_credential
    : "Credenciales incorrectas";
};
