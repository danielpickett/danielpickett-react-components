import { ReactNode, FC, ReactElement } from "react"

export type CardPropsType = {
  children: React.ReactNode
}

declare function Card(props: CardPropsType): ReactElement
