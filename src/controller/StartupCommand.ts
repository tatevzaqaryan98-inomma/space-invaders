import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import RegisterDictionaryCommands from './RegisterDictionaryCommands';
import RegisterViewsCommands from './RegisterViewsCommands';

export default class StartupCommand extends SyncMacroCommand<SimpleCommand> {
  public initializeMacroCommand(): void {
    this.addSubCommand(RegisterViewsCommands);
    this.addSubCommand(RegisterDictionaryCommands);
  }
}
