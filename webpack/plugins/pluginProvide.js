/**
 * Created by: Matheus Benites (benites.amorim@gmail.com)
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
import {ProvidePlugin} from 'webpack';

const config = {};

export const providePlugin = new ProvidePlugin(config);
