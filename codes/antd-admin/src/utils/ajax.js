import globalConfig from '../config';
import MockAjax from './MockAjax';
import RealAjax from './RealAjax';

const mockAjax = new MockAjax();
const realAjax = new RealAjax();

const tmp = globalConfig.debug === true ? mockAjax : realAjax;
export default tmp;
