import {db} from '../../datasources/mysqlDB';
import {Op} from 'sequelize';
import UtilService from '../../datasources/utils';

const User = db.user;
var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date(year, month, 1).getDay();
var date = new Date();
var date1 = new Date();
var date2 = new Date();
var date3 = new Date();
var date4 = new Date();
var date5 = new Date();
var date6 = new Date();

date1.setDate(date.getDate() - 1);
date2.setDate(date.getDate() - 2);
date3.setDate(date.getDate() - 3);
date4.setDate(date.getDate() - 4);
date5.setDate(date.getDate() - 5);
date6.setDate(date.getDate() - 6);

export default {
    Query: {
        _allUsersMeta: (_, args) => {
            var startDate = (args.filter && args.filter.startDate) ? args.filter.startDate : "2016-01-01"
            return new Promise((resolve, reject) => {
                User
                .findAndCountAll({
                    where: {
                        created_at: {
                            [Op.gte]:startDate
                        },
                        companyId: args.filter.companyId
                    }
                })
                .then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res.count })
                })
            })
        },
        _createdEachMonthReportsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 1),
                                [Op.lte]:UtilService.endTime(year, month+1, 1)
                            },
                        }
                    }),
                    mon_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-1, 1),
                                [Op.lte]:UtilService.endTime(year, month, 1)
                            },
                        }
                    }),
                    mon_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-2, 1),
                                [Op.lte]:UtilService.endTime(year, month-1, 1)
                            },
                        }
                    }),
                    mon_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-3, 1),
                                [Op.lte]:UtilService.endTime(year, month-2, 1)
                            },
                        }
                    }),
                    mon_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-4, 1),
                                [Op.lte]:UtilService.endTime(year, month-3, 1)
                            },
                        }
                    }),
                    mon_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-5, 1),
                                [Op.lte]:UtilService.endTime(year, month-4, 1)
                            },
                        }
                    }),
                    mon_6: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-6, 1),
                                [Op.lte]:UtilService.endTime(year, month-5, 1)
                            },
                        }
                    }),
                    mon_7: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-7, 1),
                                [Op.lte]:UtilService.endTime(year, month-6, 1)
                            },
                        }
                    }),
                    mon_8: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-8, 1),
                                [Op.lte]:UtilService.endTime(year, month-7, 1)
                            },
                        }
                    }),
                    mon_9: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-9, 1),
                                [Op.lte]:UtilService.endTime(year, month-8, 1)
                            },
                        }
                    }),
                    mon_10: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-10, 1),
                                [Op.lte]:UtilService.endTime(year, month-9, 1)
                            },
                        }
                    }),
                    last: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-11, 1),
                                [Op.lte]:UtilService.endTime(year, month-10, 1)
                            },
                        }
                    }),
                })
            })
        },
        _createdEachWeekUsersMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 1),
                                [Op.lte]:UtilService.endTime(year, month, 7 - day)
                            },
                        }
                    }),
                    week_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 8 - day),
                                [Op.lte]:UtilService.endTime(year, month, 14 - day)
                            },
                        }
                    }),
                    week_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 15 - day),
                                [Op.lte]:UtilService.endTime(year, month, 21 - day)
                            },
                        }
                    }),
                    week_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 22 - day),
                                [Op.lte]:UtilService.endTime(year, month, 28 - day)
                            },
                        }
                    }),
                    week_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 29 - day),
                                [Op.lte]:UtilService.endTime(year, month, 35 - day)
                            },
                        }
                    }),
                })
            })
        },
        _createdEachDayUsersMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    day_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                                [Op.lte]:UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                            },
                        }
                    }),
                    day_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                                [Op.lte]:UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                            },
                        }
                    }),
                    day_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                                [Op.lte]:UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                            },
                        }
                    }),
                    day_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                                [Op.lte]:UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                            },
                        }
                    }),
                    day_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                                [Op.lte]:UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                            },
                        }
                    }),
                    day_6: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                                [Op.lte]:UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                            },
                        }
                    }),
                    day_7: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                                [Op.lte]:UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                            },
                        }
                    }),
                })
            })
        },
    },
};
