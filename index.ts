interface IPluginCommand {
  Execute(): string;
}

export function Execute() {
  return "called hello from HelloPlugin";
}
