interface IPluginCommand {
  GetHi(): string;
}

export function GetHi() {
  return "called hello from HelloPlugin";
}
