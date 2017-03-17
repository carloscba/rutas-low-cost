/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : aeropuertos

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-03-17 16:36:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for aeropuerto
-- ----------------------------
DROP TABLE IF EXISTS `aeropuerto`;
CREATE TABLE `aeropuerto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `iata` varchar(255) DEFAULT NULL,
  `pos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of aeropuerto
-- ----------------------------
INSERT INTO `aeropuerto` VALUES ('1', 'Buenos Aires', 'Bahía Blanca', 'Comandante Espora', 'BHI', '-38.7163017,-62.1660177');
INSERT INTO `aeropuerto` VALUES ('2', 'Buenos Aires', 'Ciudad de Buenos Aires', 'Jorge Newbery', 'AEP', '-34.5580261,-58.4191975');
INSERT INTO `aeropuerto` VALUES ('3', 'Buenos Aires', 'Ezeiza', 'Ministro Pistarini', 'EZE', '-34.815,-58.5370171');
INSERT INTO `aeropuerto` VALUES ('4', 'Buenos Aires', 'Junín', 'Junín', 'JNI', '-34.5458573,-60.9312784');
INSERT INTO `aeropuerto` VALUES ('5', 'Buenos Aires', 'La Plata', 'La Plata', 'LPG', '-34.9655197,-57.8975635');
INSERT INTO `aeropuerto` VALUES ('6', 'Buenos Aires', 'Mar del Plata', 'Astor Piazzolla', 'MDQ', '-37.9330333,-57.5841435');
INSERT INTO `aeropuerto` VALUES ('7', 'Buenos Aires', 'Necochea', 'Necochea', 'NEC', '-38.4879499,-58.8169243');
INSERT INTO `aeropuerto` VALUES ('8', 'Buenos Aires', 'San Fernando', 'San Fernando', 'FDO', '-34.4554405,-58.5862883');
INSERT INTO `aeropuerto` VALUES ('9', 'Buenos Aires', 'Santa Teresita', 'Santa Teresita', 'STT', '-36.5423657,-56.7224987');
INSERT INTO `aeropuerto` VALUES ('10', 'Buenos Aires', 'Tandil', 'Tandil', 'TDL', '-37.2324369,-59.2355094');
INSERT INTO `aeropuerto` VALUES ('11', 'Buenos Aires', 'Villa Gesell', 'Villa Gesell', 'VGL', '-37.234498,-57.0241187');
INSERT INTO `aeropuerto` VALUES ('12', 'Catamarca', 'Catamarca', 'Cnel. Felipe Varela', 'CTC', '-28.5927616,-65.7541913');
INSERT INTO `aeropuerto` VALUES ('13', 'Chaco', 'Resistencia', 'Jose de San Martín', 'RES', '-27.4461775,-59.0514774');
INSERT INTO `aeropuerto` VALUES ('14', 'Chubut', 'Comodoro Rivadavia', 'Intern.Gral. E. Mosconi', 'CRD', '-45.7894316,-67.4696871');
INSERT INTO `aeropuerto` VALUES ('15', 'Chubut', 'Esquel', 'Brig. Gral. Antonio Parodi', 'EQS', '-42.9061948,-71.1471215');
INSERT INTO `aeropuerto` VALUES ('16', 'Chubut', 'Puerto Madryn', 'El Tehuelche', 'PMY', '-42.7596142,-65.1037338');
INSERT INTO `aeropuerto` VALUES ('17', 'Chubut', 'Trelew', 'Alte. Marcos A. Zar', 'REL', '-43.2099533,-65.2755933');
INSERT INTO `aeropuerto` VALUES ('18', 'Córdoba', 'Córdoba', 'A.Taravella/Pajas Blancas', 'COR', '-31.3154321,-64.2145085');
INSERT INTO `aeropuerto` VALUES ('19', 'Córdoba', 'Río Cuarto', 'Area Material Río Cuarto', 'RCU', '-33.0913094,-64.2724709');
INSERT INTO `aeropuerto` VALUES ('20', 'Corrientes', 'Corrientes', 'Dr. Piragine Niveyro', 'CNQ', '-27.4483078,-58.7603974');
INSERT INTO `aeropuerto` VALUES ('21', 'Corrientes', 'Goya', 'Diego N. Díaz Colodrero', 'OYA', '-29.1049905,-59.2207626');
INSERT INTO `aeropuerto` VALUES ('22', 'Corrientes', 'Paso de los Libres', 'Paso de los Libres', 'AOL', '-29.6881667,-57.1553125');
INSERT INTO `aeropuerto` VALUES ('23', 'Entre Ríos', 'Concordia', 'Comodoro Pierrestegui', 'COC', '-29.6881667,-57.1553125');
INSERT INTO `aeropuerto` VALUES ('24', 'Entre Ríos', 'Paraná', 'Gral. Justo J.de Urquiza', 'PRA', '-31.7900161,-60.4864431');
INSERT INTO `aeropuerto` VALUES ('25', 'Formosa', 'Formosa', 'El Pucú', 'FMA', '-26.214244,-58.2321538');
INSERT INTO `aeropuerto` VALUES ('26', 'Jujuy', 'San Salvador de Jujuy', 'Gob. Horacio Guzmán', 'JUJ', '-24.3853529,-65.0987492');
INSERT INTO `aeropuerto` VALUES ('27', 'La Pampa', 'General Pico', 'General Pico', 'GPO', '-35.6886925,-63.7601045');
INSERT INTO `aeropuerto` VALUES ('28', 'La Pampa', 'Santa Rosa', 'Santa Rosa', 'RSA', '-36.591892,-64.2818441');
INSERT INTO `aeropuerto` VALUES ('29', 'La Rioja', 'La Rioja', 'Cap. Vicente A. Almonacid', 'IRJ', '-29.385343,-66.8002971');
INSERT INTO `aeropuerto` VALUES ('30', 'Mendoza', 'Malargue', 'Cdro. Ricardo Salomon', 'LGS', '-35.4839753,-69.5860765');
INSERT INTO `aeropuerto` VALUES ('31', 'Mendoza', 'Mendoza', 'Gob. Gabrielli/El Plumerillo', 'MDZ', '-32.8277745,-68.8009093');
INSERT INTO `aeropuerto` VALUES ('32', 'Mendoza', 'San Rafael', 'Santiago Germano', 'AFA', '-34.5862696,-68.4059397');
INSERT INTO `aeropuerto` VALUES ('33', 'Misiones', 'Posadas', 'Lib. Gral. J. de San Martín', 'PSS', '-27.39174,-55.9716548');
INSERT INTO `aeropuerto` VALUES ('34', 'Misiones', 'Puerto Iguazú', 'My. Carlos E. Krause', 'IGR', '-25.7334542,-54.4806967');
INSERT INTO `aeropuerto` VALUES ('35', 'Neuquén', 'Cutral-Co', 'Cutral-Co', 'CUT', '-38.9397551,-69.2734206');
INSERT INTO `aeropuerto` VALUES ('36', 'Neuquén', 'Neuquén', 'Presidente Perón', 'NQN', '-38.949887,-68.1565158');
INSERT INTO `aeropuerto` VALUES ('37', 'Neuquén', 'San Martín de los Andes', 'Aviador .Campos/Chapelco', 'CPC', '-40.0752733,-71.1394102');
INSERT INTO `aeropuerto` VALUES ('38', 'Río Negro', 'Bariloche', 'Tte. Luis Candelaria', 'BRC', '-41.1461029,-71.1636142');
INSERT INTO `aeropuerto` VALUES ('39', 'Río Negro', 'General Roca', 'Arturo Humberto Illia', 'GNR', '-39.0032177,-67.6123148');
INSERT INTO `aeropuerto` VALUES ('40', 'Río Negro', 'Viedma', 'Gobernador Castello', 'VDM', '-40.8702726,-62.9988547');
INSERT INTO `aeropuerto` VALUES ('41', 'Salta', 'Salta', 'Gral. Guemes', 'SLA', '-24.8442254,-65.4806004');
INSERT INTO `aeropuerto` VALUES ('42', 'Salta', 'Tartagal', 'Gral. E. Mosconi', 'TTG', '-45.7894316,-67.4696871');
INSERT INTO `aeropuerto` VALUES ('43', 'San Juan', 'San Juan', 'Domingo Faustino Sarmiento', 'UAQ', '-31.5718093,-68.4247562');
INSERT INTO `aeropuerto` VALUES ('44', 'San Luis', 'Merlo', 'Valle del Conlara', 'RLO', '-32.3803797,-65.1821393');
INSERT INTO `aeropuerto` VALUES ('45', 'San Luis', 'San Luis', 'Brig. May. Cesar Raúl Ojeda', 'LUQ', '-33.270439,-66.3570119');
INSERT INTO `aeropuerto` VALUES ('46', 'San Luis', 'Villa Reynolds', 'Villa Reynolds', 'VME', '-33.7200328,-65.3754799');
INSERT INTO `aeropuerto` VALUES ('47', 'Santa Cruz', 'El Calafate', 'Comandante Armando Tola', 'FTE', '-50.2819817,-72.0585884');
INSERT INTO `aeropuerto` VALUES ('49', 'Santa Cruz', 'Río Gallegos', 'Pil. Civ. Norberto Fernández', 'RGL', '-51.6117845,-69.3085038');
INSERT INTO `aeropuerto` VALUES ('50', 'Santa Fe', 'Reconquista', 'Daniel Jukic', 'RCQ', '-29.2095724,-59.6811779');
INSERT INTO `aeropuerto` VALUES ('51', 'Santa Fe', 'Rosario', 'Islas Malvinas', 'ROS', '-32.9133513,-60.78654');
INSERT INTO `aeropuerto` VALUES ('52', 'Santa Fe', 'Santa Fe', 'Sauce Viejo', 'SFN', '-31.7088702,-60.8100047');
INSERT INTO `aeropuerto` VALUES ('53', 'Santiago del Estero', 'Río Hondo', 'Termas de Río Hondo', 'RHD', '-27.5064404,-64.9349654');
INSERT INTO `aeropuerto` VALUES ('54', 'Santiago del Estero', 'Santiago del Estero', 'Com. De La Paz Aragonés', 'SDE', '-27.7575812,-64.3032');
INSERT INTO `aeropuerto` VALUES ('55', 'Tierra del Fuego', 'Río Grande', 'Gob. Ramón Trejo Noel', 'RGA', '-53.7812935,-67.7555488');
INSERT INTO `aeropuerto` VALUES ('56', 'Tierra del Fuego', 'Ushuaia', 'Malvinas Argentinas', 'USH', '-54.8418976,-68.3104156');
INSERT INTO `aeropuerto` VALUES ('57', 'Tucumán', 'S. Miguel de Tucumán', 'Tte. Benjamín Matienzo', 'TUC', '-26.8358833,-65.1105502');
