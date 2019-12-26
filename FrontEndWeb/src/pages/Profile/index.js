import React from 'react';
import {useDispatch ,useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import AvatarInput from './AvatarInput';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut(){
    dispatch(signOut())
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name='avatar_id'/>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="Password" type="password" placeholder="Nova senha" />
        <Input
          name="ConfirmPassword"
          type="password"
          placeholder="Confirme a senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>Sair</button>
    </Container>
  );
}
