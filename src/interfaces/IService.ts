interface IService<T> {
  create(obj: T): Promise<T>
  readOne(id: string): Promise<T>;
  read(): Promise<T[]>
}

export default IService;
