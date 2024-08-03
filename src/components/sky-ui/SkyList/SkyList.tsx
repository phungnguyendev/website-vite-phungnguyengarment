import { List, ListProps } from 'antd'

export interface SkyListRequiredDataType {
  id?: number
}

export interface SkyListProps<T extends SkyListRequiredDataType> extends ListProps<T> {}

const SkyList = <T extends SkyListRequiredDataType>({ ...props }: SkyListProps<T>) => {
  return (
    <>
      <List {...props} />
    </>
  )
}

export default SkyList
