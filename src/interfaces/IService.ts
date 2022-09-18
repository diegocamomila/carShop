interface IService<T> {
  create(obj: T): Promise<T>
  readOne(id: string): Promise<T>;
}

export default IService;
