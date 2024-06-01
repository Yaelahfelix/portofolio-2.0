import { achievementList, workOrgList } from "@/lib/expList";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export function ExperienceDekstopSection() {
  return (
    <section className="section-default ">
      <div className="flex gap-5 items-center mb-4">
        <Typography
          variant="h4"
          fontWeight="bold"
          className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white"
        >
          Work / Organization Experience
        </Typography>
        <hr
          style={{
            height: "1px",
            width: "100%",
            border: "none",
            background: "linear-gradient(to right, white, #4fd1c5, white)",
          }}
        />
        <Typography
          variant="h4"
          fontWeight="bold"
          className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300"
        >
          Achievement
        </Typography>
      </div>
      <div className="flex ">
        <div className="w-6/12 pr-5">
          <div className="flex flex-col gap-7">
            {workOrgList.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={item.name}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="">
                    <h6 className="text-lg text-teal-300 font-semibold">
                      {item.name}
                    </h6>
                    <h6 className="text-sm">{item.job}</h6>
                  </div>
                  <h6>{item.duration}</h6>
                </div>
                <p className="text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-6/12 pl-5">
          <div className="flex flex-col gap-7">
            {achievementList.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center mb-2"
                key={item.name}
              >
                <div className="">
                  <h6 className="text-lg text-teal-300 font-semibold">
                    {item.name}
                  </h6>
                  <h6 className="text-sm">{item.company}</h6>
                </div>
                <h6>{item.date}</h6>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceMobileSection() {
  return (
    <section className="section-default">
      <div className="flex flex-col">
        <div className="py-3">
          <Typography
            variant="h4"
            fontWeight="bold"
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white pb-3 border-b border-slate-300"
          >
            Work / Organization Experience
          </Typography>
          <div className="flex flex-col">
            {workOrgList.map((item) => (
              <div className="py-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="">
                    <h6 className="text-md text-teal-300 font-semibold">
                      {item.name}
                    </h6>
                    <h6 className="text-xs">{item.job}</h6>
                  </div>
                  <h6 className="text-sm">{item.duration}</h6>
                </div>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-3">
          <Typography
            variant="h4"
            fontWeight="bold"
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white pb-3 border-b border-slate-300 text-right"
          >
            Achivements
          </Typography>
          <div className="flex flex-col ">
            {achievementList.map((item) => (
              <div className="flex justify-between items-center mb-2 gap-3 py-3">
                <div className="">
                  <h6 className="text-md text-teal-300 font-semibold">
                    {item.name}
                  </h6>
                  <h6 className="text-xs">{item.company}</h6>
                </div>
                <h6 className="text-xs">{item.date}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
