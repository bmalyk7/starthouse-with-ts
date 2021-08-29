import React, {ReactElement} from "react";

export type Post = {
  id: string
  title: string
  body: string
}

export type Comments = [{
  name: string
  body: string
}]

export type PostIdProps = {
  provideTitle: (arg: string) => void
}

export type Params = {
  id: string
}

export type Posts = [{
  title: string
  id: string
  body: string
  userId: string
}]

export type PostsProps = {
  posts: Posts
}

export type Values = {
  title: string
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export type Error = {
  msg: string
}

export type PostsType = [{
  title: string
  id: string
  body: string
  userId: string
}]

export type ButtonProps = {
  onClickHandler : () => void
  children?: string | ReactElement
}
