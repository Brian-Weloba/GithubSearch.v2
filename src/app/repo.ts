class Owner {
  constructor(
    public login: any
  ) {
  }
}

class Parent {
  constructor(
    public owner: Owner,
  ) {
  }
}

export class Repo {

  // @ts-ignore
  constructor(
    public name: any,
    public description: any,
    public updated_at: any,
    public language: any,
    public forks_count: any,
    public fork: boolean,
    public parent: Parent,
    public url: any,
    public fork_owner: any,
    public fork_name: any
  ) {

  }

}
