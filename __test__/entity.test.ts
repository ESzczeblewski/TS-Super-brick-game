import { Entity } from '../src/utils';
import { IComponent } from '../src/utils';

class E extends Entity { }

class C1 implements IComponent {
  public entity: E;
  public awake(): void { }
  public update(deltaTime: number): void { };
}

class C2 implements IComponent {
  public entity: E;
  public awake(): void { }
  public update(deltaTime: number): void { };
}

class C3 implements IComponent {
  public entity: E;
  public awake(): void { }
  public update(deltaTime: number): void { };
}

describe('>>> Entity', () => {
  let e: E
  const c1 = new C1()
  const c2 = new C2()
  const c3 = new C3()

  beforeEach(() => {
    e = new E()
  })

  it('should add, remove, get, and check components', () => {
    expect(e.components.length).toBe(0)
    e.addComponent(c1)
    e.addComponent(c2)
    e.addComponent(c3)

    expect(e.components.length).toBe(3)
    expect(e.components[0]).toBe(c1)
    expect(e.components[1]).toBe(c2)
    expect(e.components[2]).toBe(c3)

    e.RemoveComponent(C2)
    expect(e.components.length).toBe(2)
    expect(e.components[0]).toBe(c1)
    expect(e.components[1]).toBe(c3)

    expect(e.GetComponent(C1)).toBe(c1)
    expect(e.GetComponent(C3)).toBe(c3)

    expect(e.HasComponent(C1)).toBeTruthy()
    expect(e.HasComponent(C3)).toBeTruthy()
  });

  it('should throw error if component wasn\'t found', () => {
    expect(e.HasComponent(C1)).toBeFalsy()
    expect(() => e.GetComponent(C1)).toThrow()
  });

  it('should update all Components', () => {
    const spy1 = jest.spyOn(c1, 'update');
    const spy2 = jest.spyOn(c2, 'update');
    const spy3 = jest.spyOn(c3, 'update');

    expect(spy1).not.toBeCalled();
    expect(spy2).not.toBeCalled();
    expect(spy3).not.toBeCalled();

    e.addComponent(c1);
    e.addComponent(c2);
    e.addComponent(c3);

    const deltaTime = 10;
    e.update(deltaTime);

    expect(spy1).toBeCalledWith(deltaTime);
    expect(spy2).toBeCalledWith(deltaTime);
    expect(spy3).toBeCalledWith(deltaTime);
  })
})