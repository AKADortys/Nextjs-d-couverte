export class ApiPokemon {
  private readonly baseUrl: string = "https://tyradex.vercel.app/api/v1/";
  private readonly pokemons: string = `${this.baseUrl}pokemon`;
  private readonly generations: string = `${this.baseUrl}gen/`;
  private storage = new Map<string, any>();
  private expiration = new Map<string, NodeJS.Timeout>();

  constructor() {
    this.getPokemons();
  }

  private cacheData(key: string, value: any, ttl: number = 1200000) {
    this.storage.set(key, value);

    // Supprimer après expiration
    if (this.expiration.has(key)) {
      clearTimeout(this.expiration.get(key)!);
    }
    this.expiration.set(
      key,
      setTimeout(() => {
        this.storage.delete(key);
        this.expiration.delete(key);
      }, ttl)
    );
  }

  async getPokemons(): Promise<any> {
    if (this.storage.has("pokemons")) return this.storage.get("pokemons");

    try {
      const response = await fetch(this.pokemons);
      const data = await response.json();
      this.cacheData("pokemons", data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getGeneration(generation: number): Promise<any> {
    const key = `generation-${generation}`;
    if (this.storage.has(key)) return this.storage.get(key);

    try {
      const response = await fetch(`${this.generations}/${generation}`);
      const data = await response.json();
      this.cacheData(key, data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPokemon(id: number): Promise<any> {
    const key = `pokemon-${id}`;
    if (this.storage.has(key)) return this.storage.get(key);

    try {
      const response = await fetch(`${this.pokemons}/${id}`);
      const data = await response.json();
      this.cacheData(key, data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getCachedPokemon(id: number): any {
    return this.storage.get(`pokemon-${id}`) || null;
  }

  getCachedPokemons(): any {
    return this.storage.get("pokemons") || null;
  }

  getCachedGenerations(): any {
    return Array.from(this.storage.keys())
      .filter((key) => key.startsWith("generation-"))
      .map((key) => this.storage.get(key));
  }
}
