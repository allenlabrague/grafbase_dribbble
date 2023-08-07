"use client";

import { motion, useCycle, AnimatePresence } from "framer-motion";
import { NavLinks } from "@/constants";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const variants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirections: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirections: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: 0,
  },
  open: {
    opacity: 1,
    x: 1,
  },
};

const NavbarMenu = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="bg-white dark:bg-black absolute top-14 left-0 h-[240px] z-10 border-b-1 border-slate-200 dark:border-gray p-5"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              <motion.ul className="flex flex-col items-start gap-5">
                {NavLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    href={link.href}
                    key={link.key}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </motion.ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div>
        {open ? (
          <button onClick={cycleOpen}>
            <AiOutlineClose fontSize={30} />
          </button>
        ) : (
          <button onClick={cycleOpen}>
            <HiMenuAlt2 fontSize={30} />
          </button>
        )}
      </div>
    </>
  );
};

export default NavbarMenu;
