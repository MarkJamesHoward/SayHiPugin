interface IPluginCommand {
  SayHi(): string;
}

export function SayHi() {
  return "called hello from HelloPlugin";
}
